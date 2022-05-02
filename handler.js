'use strict';
const AWS = require('aws-sdk');
const middy = require('@middy/core');
const httpJsonBodyParser = require('@middy/http-json-body-parser');

const hello = async (event) => {
  const { name } = event.body;
  const date = new Date().toISOString();
  try {
    return {
      statusCode: 200,
      body: JSON.stringify(
        {
          message: `Hey ${name} welcome to serverless with layers`,
          input: event,
        },
        null,
        2
      ),
    };
  } catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      body: JSON.stringify(
        {
          message: 'Somethinig went wrong',
          input: error,
        },
        null,
        2
      ),
    };
  }
};

module.exports = {
  hello: middy(hello).use(httpJsonBodyParser()),
};
