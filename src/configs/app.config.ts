export type AppConfig = {
  apiPrefix: string;
  authenticatedEntryPath: string;
  unAuthenticatedEntryPath: string;
  tourPath: string;
  locale: string;
  enableMock: boolean;
};

const appConfig: AppConfig = {
  apiPrefix: import.meta.env.VITE_API_BASE_URL || "http://localhost:3030/",
  authenticatedEntryPath: "/home",
  unAuthenticatedEntryPath: "/sign-in",
  tourPath: "/",
  locale: "es",
  enableMock: true,
};

export default appConfig;
