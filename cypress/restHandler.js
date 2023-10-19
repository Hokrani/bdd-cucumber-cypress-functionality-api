/**
 * Create the Header of the object
 * @param {*} options - Options to set the type in key and value pair
 * @returns Header of the object
 */
export const createHeader = (options) => {
  const headers = new Headers();
  for (const [key, value] of options) {
    headers.append(key, value);
  }
  return headers;
};

/**
 * Fetch the response body based on the request options
 * @param {*} url - URL of the API
 * @param {*} requestionOptions - Request options which contains Method, body
 * @returns Response object
 */
const doFetch = async (url, requestionOptions) => {
  const response = await fetch(url, requestionOptions);
  if (!response.ok) {
    const message = `An error had occured in ${requestionOptions.method}:${response.status}`;
    throw new Error(message);
  } else return response.json();
};

/**
 * GET response for the API
 * @param {*} url - URL of the API
 * @param {*} headers - Headers of the request API
 * @returns Response of the GET API.
 */
export const doGet = async (url, headers) => {
  const requestOptions = {
    method: "GET",
    headers: headers,
    redirect: "follow",
  };
  return await doFetch(url, requestOptions);
};
/**
 * POST response for the API
 * @param {*} url - URL of the API
 * @param {*} headers - Headers of the request API
 * @param {*} jsonBody - Request body
 * @returns Response of the POST API.
 */
export const doPost = async (url, headers, jsonBody) => {
  const requestOptions = {
    method: "POST",
    headers: headers,
    body: jsonBody,
    redirect: "follow",
  };
  return await doFetch(url, requestOptions);
};
