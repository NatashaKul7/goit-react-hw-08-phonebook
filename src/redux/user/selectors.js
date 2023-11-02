export const selectIsAuthenticated = state => state.auth.isAuthenticated;
export const selectUserIsLoading = state => state.auth.isLoading;
export const selectUserError = state => state.auth.error;
export const selectUser = state => state.auth.user;
