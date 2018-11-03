// prettier-ignore
const Mutations = {
  async createItem(parent, args, ctx, info) {
    return await ctx.db.mutation.createItem({ data: { ...args } }, info);
  },
  async updateItem(parent, args, ctx, info) {
    const updates = { ...args };
    delete updates.id;
    return await ctx.db.mutation.updateItem({data: updates, where: { id: args.id }}, info)
  },
  async deleteItem(parent, args, ctx, info) {
    const where = { id: args.id };
    const item = await ctx.db.query.item({ where }, `{ id title}`);
    //TODO Check for permission
    return ctx.db.mutation.deleteItem({ where }, info);
  }
};

module.exports = Mutations;
