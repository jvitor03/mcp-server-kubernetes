// Environment variable configuration for the MCP server
export const envConfig = {
  // Check environment variables for tool filtering
  allowOnlyReadonlyTools: process.env.ALLOW_ONLY_READONLY_TOOLS === "true",
  allowedToolsEnv: process.env.ALLOWED_TOOLS,
  nonDestructiveTools: process.env.ALLOW_ONLY_NON_DESTRUCTIVE_TOOLS === "true",
  kubectlContextEnabled: process.env.KUBECTL_CONTEXT_ENABLED === "true",
} as const;