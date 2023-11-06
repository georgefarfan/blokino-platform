export const selectContext = (state) => state.context;
export const selectBreadcrumbType = (state) => state.context.breadcrumb.type;
export const selectBreadcrumbPaths = (state) => state.context.breadcrumb.paths;

export const selectToolBox = (state) => state.context.taskSelected.editor.toolBox;
export const selectTaskSelected = (state) => state.context.taskSelected;
export const selectTaskSelectedSummary = (state) => state.context.taskSelected.summary;
export const selectEditorActions = (state) => state.context.actions;
