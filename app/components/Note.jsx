import React from 'react';
import {compose} from 'redux';
import {DragSource, DropTarget} from 'react-dnd';
import ItemTypes from '../constants/itemTypes';

class Note extends React.Component {
  render() {
    const {
      connectDragSource,
      connectDropTarget,
      onMove,
      id,
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
    return {
      id: props.id
    };
  }
};

const noteTarget = {
  hover(targetProps, monitor) {
    const targetId = targetProps.id;
    const sourceProps = monitor.getItem();
    const sourceId = sourceProps.id;
    if (sourceId !== targetId) {
      targetProps.onMove({sourceId, targetId});
    }
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
