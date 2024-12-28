export function request(ctx) {
  const { id, name, email } = ctx.args.input;
  return {
    operation: "PutItem",
    key: { id: { S: id } },
    attributeValues: {
      name: { S: name },
      email: { S: email },
    },
  };
}

export function response(ctx) {
  return ctx.result;
}
