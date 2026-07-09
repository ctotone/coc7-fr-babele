Hooks.on("init", () => {
  if (typeof Babele !== "undefined") {
    Babele.get().register({
      module: "coc7-fr-babele",
      lang: "fr",
      dir: "compendium"
    });
  }
});