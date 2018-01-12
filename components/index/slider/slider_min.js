import React,{Component} from 'react';
import dynamic from 'next/dynamic'
// import $ from 'jquery';
import Last_Posts_Advive from '../last_subject/last_posts_advice';



class Slider_Min extends Component {
  componentWillMount() {
    const props             = this.props;
    const last_posts_advice = props.last_posts_advice;

    this.post   = last_posts_advice.map((text,index)=>{
      return(
        <Last_Posts_Advive key={index} contact={text}></Last_Posts_Advive>
      )
    })
  }
  async componentDidMount() {
        const Flickity = await import('flickity');
        setTimeout( () =>{
          const slider   = this.refs.slider_index;
          this.flkty = new Flickity(slider, {
            cellAlign: 'left',
            contain: true,
            pageDots: false,
            prevNextButtons: true,
            wrapAround: false,
             autoPlay:true,
            draggable:true,
            rightToLeft: false,
            freeScroll: false,
            groupCells: true,
            imagesLoaded: true
          });
        });
  }
  async omponentWillUnmount() {
    if (this.flkty) {
          const slider   = this.refs.slider_index;
          const Flickity = await import('flickity');
          setTimeout( () =>{
            this.flkty.destroy();
            const flkty = new Flickity( slider, {
              cellAlign: 'left',
              contain: true,
              pageDots: false,
              prevNextButtons: true,
              wrapAround: false,
               autoPlay:true,
              draggable:true,
              rightToLeft: false,
              freeScroll: false,
              groupCells: true,
              imagesLoaded: true
            });
          });
      }
  }

    render() {
        return (
          <div id="forum">
                  <div className="forum-Class--">
                    <span className="border-top" />
                    <div className="wrapper">
                      <aside className="right Right_Width">
                        <h3 className="text">آخرین پست های مشاوران</h3>
                        <div className="main-carousel_right" ref='slider_index'>
                          {this.post}
                        </div>
                      </aside>
                      <div className="clear-fix" />
                    </div>
                  </div>
  </div>
        );
    }
}

export default (Slider_Min)
