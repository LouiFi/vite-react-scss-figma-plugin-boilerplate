figma.showUI(__html__);

figma.ui.resize(500, 500);

figma.notify("Plugin started/refreshed");

figma.ui.onmessage = (message) => {
  if (message.type === "sayHello") {
    figma.notify("Hello");
  }
};
