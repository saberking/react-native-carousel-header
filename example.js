import {Dimensions, Text, View} from 'react-native'
import React from 'react'
import Carousel from 'react-native-carousel-header'

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {pageIndex: 0, touchIndex: -1}
  }
  onPress(index) {
    alert('page '+index+' pressed')
    this.setState({touchIndex: -1, pageIndex: index})
  }
  render() {
    return (<View>
      <Carousel containerWidth={Dimensions.get('window').width}
        style={{height:200}}
        itemWidth={200}
        onTouchStart={(touchIndex)=>this.setState({touchIndex})}
        onMove={()=>this.setState({touchIndex: -1})}
        pageIndex={this.state.pageIndex}
        onPress={index=>this.onPress(index)}
        onPageChange={index=>this.setState({pageIndex: index})}>
        {[0,1,2,3,4,5,6,7,8].map(i =>
          <View key={i}
            style={{
              height: 200,
              width: 200,
              backgroundColor: i === this.state.touchIndex
                ? 'blue' : i === this.state.pageIndex ? 'red' : 'yellow'
            }}>
            <Text style={{fontSize: 60}}>{i}</Text>
          </View>
        )}
      </Carousel>
      <Text style={{fontSize: 50, marginTop: 100}}>on Page {this.state.pageIndex}</Text>
    </View>)
  }
}
