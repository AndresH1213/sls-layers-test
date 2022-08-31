import {
  APIGatewayProxyHandler,
  APIGatewayProxyEvent,
  APIGatewayProxyResult,
} from 'aws-lambda';
import Tower from '/opt/services/models';

export const handler: APIGatewayProxyHandler = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  const tower = new Tower();
  const response = JSON.stringify(event) + tower.fetchTower();
  console.log('hey v8');
  return {
    statusCode: 200,
    body: JSON.stringify(response),
  };
};
