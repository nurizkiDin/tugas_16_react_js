import { 
  MediaBox, Slider, Slide,
  Row, Col, Caption 
} from "react-materialize";

function App() {
  return (
    <div>
      <Row>
        <Col xl={12}>
          <Slider
            fullscreen={false}
            options={{
              duration: 500,
              height: 400,
              indicators: true,
              interval: 6000
            }}
          >
            <Slide image={<img alt="" src="https://s-ec.bstatic.com/images/hotel/max1024x768/106/106114417.jpg"/>}>
              <Caption placement="center">
                <h3 className="black-text text-lighten-5">
                  Pantai
                </h3>
                <h5 className="black-text text-lighten-5">
                  Dapatkan Kesempatan Jalan &ndash; Jalan Ke Pantai Dengan Membeli Sebuah Product
                </h5>
              </Caption>
            </Slide>
            <Slide image={<img alt="" src="https://photos.mandarinoriental.com/is/image/MandarinOriental/paris-2017-home?wid=2880&amp;hei=1280&amp;fmt=jpeg&amp;crop=9,336,2699,1200&amp;anchor=1358,936&amp;qlt=75,0&amp;fit=wrap&amp;op_sharpen=0&amp;resMode=sharp2&amp;op_usm=0,0,0,0&amp;iccEmbed=0&amp;printRes=72"/>}>
              <Caption placement="left">
                <h3 className="black-text text-lighten-5">
                  Paris
                </h3>
                <h5 className="black-text text-lighten-5">
                  Dapatkan Kesempatan Jalan &ndash; Jalan Ke Paris Dengan Membeli Sebuah Product
                </h5>
              </Caption>
            </Slide>
            <Slide image={<img alt="" src="https://asset.kompas.com/crops/fQXUEHkzeOo0xuX0Ex9nIFrFuTQ=/140x3:1920x1190/750x500/data/photo/2022/06/08/62a0018064b2d.jpg"/>}>
              <Caption placement="right">
                <h3 className="yellow-text text-lighten-1">
                  Amerika
                </h3>
                <h5 className="yellow-text text-lighten-1">
                  Dapatkan Kesempatan Jalan &ndash; Jalan Ke Amerika Dengan Membeli Sebuah Product
                </h5>
              </Caption>
            </Slide>
          </Slider>
        </Col>
      </Row>
      <Row>&emsp;<h7>Hot List</h7></Row>
      <Row>
        <Col xl={3}>
          <MediaBox
            options={{
              inDuration: 275,
              onCloseEnd: null,
              onCloseStart: null,
              onOpenEnd: null,
              onOpenStart: null,
              outDuration: 200
            }}
          >
            <img
              alt="product"
              src="https://ecs7.tokopedia.net/img/cache/300/attachment/2018/8/15/25749302/25749302_274a89a6-ea41-4a3a-ac6b-ce2881016369.jpg"
              width="300"
            />
          </MediaBox>
          <h7>Audio Technica &ndash; Mulai Dari <mark>Rp.910 rb</mark></h7>
        </Col>
        <Col xl={3}>
          <MediaBox
            options={{
              inDuration: 275,
              onCloseEnd: null,
              onCloseStart: null,
              onOpenEnd: null,
              onOpenStart: null,
              outDuration: 200
            }}
          >
            <img
              alt="product"
              src="https://ecs7.tokopedia.net/img/cache/300/attachment/2019/1/16/25287362/25287362_a79f0aa6-cf1f-484f-b1a8-83993245cd6f.jpg"
              width="300"
            />
          </MediaBox>
          <h7>Handphone Samsung &ndash; Mulai Dari <mark>Rp.200 rb</mark></h7>
        </Col>
        <Col xl={3}>
          <MediaBox
            options={{
              inDuration: 275,
              onCloseEnd: null,
              onCloseStart: null,
              onOpenEnd: null,
              onOpenStart: null,
              outDuration: 200
            }}
          >
            <img
              alt="product"
              src="https://ecs7.tokopedia.net/img/cache/300/attachment/2018/6/26/28201197/28201197_856195f2-b0ba-4711-8200-fd95beaf1df5.jpg"
              width="300"
            />
          </MediaBox>
          <h7>Squishy &ndash; Mulai Dari <mark>Rp.5,5 rb</mark></h7>
        </Col>
        <Col xl={3}>
          <MediaBox
            options={{
              inDuration: 275,
              onCloseEnd: null,
              onCloseStart: null,
              onOpenEnd: null,
              onOpenStart: null,
              outDuration: 200
            }}
          >
            <img
              alt="product"
              src="https://ecs7.tokopedia.net/img/cache/300/attachment/2018/4/23/28201197/28201197_0383072a-1766-453c-951a-8b53a719cff0.jpg"
              width="300"
            />
          </MediaBox>
          <h7>Koleksi The Avenger &ndash; Mulai Dari <mark>Rp.10 rb</mark></h7>
        </Col>
      </Row>
    </div>
  );
}

export default App;
