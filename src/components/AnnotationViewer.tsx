// Copyright (C) 2021, Mindee.

// This program is licensed under the Apache License version 2.
// See LICENSE or go to <https://www.apache.org/licenses/LICENSE-2.0.txt> for full license details.

import { Box, makeStyles, Theme } from "@material-ui/core";
import {
  AnnotationData,
  AnnotationShape,
  AnnotationViewer as AnnotationViewerBase,
  Stage,
} from "react-mindee-js";
const COMPONENT_ID = "AnnotationViewer";

const useStyles = makeStyles((theme: Theme) => ({
  wrapper: {
    height: "100%",
  },
  image: {
    height: "100%",
    width: "100%",
  },
}));

interface Props {
  loadingImage: boolean;
  annotationData: AnnotationData;
  setAnnotationStage: (stage: Stage) => void;
  onShapeMouseEnter: (shape: AnnotationShape) => void;
  onShapeMouseLeave: (shape: AnnotationShape) => void;
  onShapeClick: (shape: AnnotationShape) => void;
}

export default function AnnotationViewer({
  setAnnotationStage,
  annotationData,
  onShapeMouseLeave,
  onShapeClick,
  loadingImage,
  onShapeMouseEnter,
}: Props): JSX.Element {
  const classes = useStyles();
  return (
    <div
      // topBar
      id={COMPONENT_ID}
      style={{
        paddingTop: 15,
        height: "100%",
        display: "flex",
        width: "100%",
      }}
      className={classes.wrapper}
    >
      {loadingImage ? (
        <div />
      ) : !annotationData.image ? (
        <Box
          height="465px"
          borderRadius="4px"
          border={`1px solid red`}
          display="flex"
          alignItems="center"
          width="100%"
          justifyContent="center"
        >
          <p >No image uploaded yet</p>
        </Box>
      ) : (
        <AnnotationViewerBase
          onShapeMouseLeave={onShapeMouseLeave}
          onShapeMouseEnter={onShapeMouseEnter}
          onShapeClick={onShapeClick}
          data={annotationData}
          getStage={setAnnotationStage}
          style={{ height: "465px", width: "100%", background: "white" }}
        />
      )}
    </div>
  );
}
