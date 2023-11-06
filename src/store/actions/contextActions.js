export const SET_BREADCRUMB = '[BREADCRUMB] - SET_BREADCRUMB';
export const SET_CHALLENGE = '[CHALLENGE] - SET_CHALLENGE';

export const setBreacrumb = (data) => ({
  type: SET_BREADCRUMB,
  payload: data,
});

export const setChallenge = (data) => ({
  type: SET_CHALLENGE,
  payload: data,
});
