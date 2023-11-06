import { createSlice } from '@reduxjs/toolkit';
import { CHALLENGE_TYPE, EDITOR_CONTEXT_ACTION } from '../constants/context.const';
import { EDITOR_WORKSPACE } from '../../shared/constants/editor-workspace';
import { BREADCRUMBS_PATHS, BREADCRUMB_PATH_TYPE } from '../constants/breadcrumb.const';

const INITIAL_STATE = {
  breadcrumb: {
    type: BREADCRUMB_PATH_TYPE.DASHBOARD,
    paths: [],
  },
  challengeSelected: '',
  editor: {
    toolBox: '',
  },
  actions: {
    exportCode: true,
    importCode: true,
    setupDevice: true,
    searchDevice: true,
    execute: true,
  },
  taskSelected: {
    name: '',
    summary: [],
    channel: '',
    variables: [],
    editor: {
      toolBox: '',
    },
    actions: {
      type: EDITOR_CONTEXT_ACTION.VALIDATE,
      checkResultCode: '',
    },
  },
};

export const contextSlice = createSlice({
  name: 'context',
  initialState: INITIAL_STATE,
  reducers: {
    setChallenge: (state, action) => {
      const challenge = action.payload.data;
      state.challengeSelected = CHALLENGE_TYPE[challenge];
      state.editor.toolBox = EDITOR_WORKSPACE[challenge];
    },

    setBreacrumb: (state, action) => {
      const paths = action.payload.data.subTree
        ? BREADCRUMBS_PATHS[action.payload.data.main][action.payload.data.subTree]
        : BREADCRUMBS_PATHS[action.payload.main];
      state.breadcrumb = {
        type: action.payload.data.main,
        paths,
      };
    },

    setTask: (state, action) => {
      // SET BREADCRUMB FOR TASKS
      const pathInfo = action.payload.data.path;
      state.breadcrumb = {
        type: pathInfo.main,
        paths:
          pathInfo.subTree && pathInfo.taskPath
            ? BREADCRUMBS_PATHS[pathInfo.main][pathInfo.taskPath][pathInfo.subTree]
            : BREADCRUMBS_PATHS[pathInfo.main],
      };

      // SET TASK SELECTED
      const task = action.payload.data.task;
      state.taskSelected = {
        name: task.NAME,
        editor: {
          toolBox: task.TOOLBOX,
        },
        actions: {
          type: task.ACTION_TYPE,
          checkResultCode: '',
        },
        summary: task.SUMMARY,
        variables: task.VARIABLES,
        channel: task.CHANNEL,
      };
    },
  },
});

export const { setBreacrumb, setChallenge, setTask } = contextSlice.actions;

export default contextSlice.reducer;
