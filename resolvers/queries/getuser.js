export function request(ctx) {
  const { id } = ctx.args;
  return {
    operation: "GetItem",
    key: { id: { S: id } },
  };
}

export function response(ctx) {
  return ctx.result;
}
