import React from 'react'
import mapboxgl from 'mapbox-gl'

export default class Map extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      lng: 37.6155600,
      lat: 55.7522200,
      zoom: 13
    }
  }
  map = null
  mapContainer = React.createRef()

  componentDidMount() {
    mapboxgl.accessToken =
      'pk.eyJ1IjoiaXRyZW5pbiIsImEiOiJjazYwbTRscmowOHN4M2ZwazB6bHk1d2Y2In0.XWHWTos5YemDNevj4OW2Qw'
    this.map = new mapboxgl.Map({
      container: this.mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom
    })
  }

  componentWillUnmount() {
    this.map.remove()
  }

  render() {
    const style = {
      position: 'absolut',
      top:'0',
      left:'0',
      height: '100vh',
      width: '100%'
    }

    return (
      <div style={style} ref={this.mapContainer} />
      //<div ref={this.mapContainer} />
      // <div /*ref={this.mapContainer}*/ >Тут будет карта</div>
    )
  }
}
