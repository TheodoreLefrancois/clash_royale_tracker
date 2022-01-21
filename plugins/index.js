module.exports = {
  onPreBuild: async ({ utils }) => {
    console.log("Exectuted tests before build");
    try {
      await utils.run.command("yarn test");
    } catch (error) {
      utils.build.cancelBuild(
        "Tests failed for any reason, run 'yarn test' locally to see what's wrong"
      );
    }
  },
};
