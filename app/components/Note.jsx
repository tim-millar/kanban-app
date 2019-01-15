import React from 'react';
import {compose} from 'redux';
import {DragSource, DropTarget} from 'react-dnd';
import ItemTypes from '../constants/itemTypes';

class Note extends React.Component {
  render() {
    const {
      connectDragSource,
      connectDropTarget,
      children,
      ...restProps
    } = this.props;
    return compose(
      connectDragSource,
      connectDropTarget
    )(<div {...restProps}>{children}</div>);
  }
}

const noteSource = {
  beginDrag(props) {
    console.log('begin drag note', props);
    return {};
  }
};

const noteTarget = {
  hover(targetProps, monitor) {
    const sourceProps = monitor.getItem();
    console.log('dragging note', sourceProps, targetProps);
  }
};

export default compose(
  DragSource(ItemTypes.NOTE, noteSource, connect => ({
    connectDragSource: connect.dragSource()
  })),
  DropTarget(ItemTypes.NOTE, noteTarget, connect => ({
    connectDropTarget: connect.dropTarget()
  }))
)(Note);
