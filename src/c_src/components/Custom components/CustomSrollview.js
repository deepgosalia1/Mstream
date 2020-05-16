import React, { Component } from 'react'
import { UIManager, findNodeHandle } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

export default class CustomScrollView extends Component {
  _container = null
  _contentOffset = 0

  scrollIntoView = async (view,height,action) => {
    if (!this._container || !view) {
      return
    }

    const [
      parentLayout,
      childLayout
    ] = await Promise.all([
      this._measureElement(this._container),
      this._measureElement(view)
    ])
   
    if(action == 'down'){  //Forcefully set the layout to 0. Bug for Selection and Date Picker
      childLayout.y = 0
    }

   const top = childLayout.y - height + this._contentOffset
    
    this._container.scrollToPosition(0, Math.max(0, top))
  }

  _measureElement = (element) => {
    const node = findNodeHandle(element)

    return new Promise((resolve) => {
      UIManager.measureInWindow(node, (x, y, width, height) => {
        resolve({ x, y, width, height })
      })
    })
  }

  _onRef = (view) => {
    this._container = view
  }

  _onScroll = (event) => {
    this._contentOffset = event.nativeEvent.contentOffset.y

    if (this.props.onScroll) {
      this.props.onScroll(event)
    }
  }

  render () {
    return (
      <KeyboardAwareScrollView
        {...this.props}
        ref={this._onRef}
        onScroll={this._onScroll}
        scrollEventThrottle={1}
        scrollEnabled={this.props.scrollEnabled}
     />
    )
  }
}
