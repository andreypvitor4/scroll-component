import react from 'react'
import usePcFunctions from './usePcFunctions'
import st from './style'

function Shscroll(props) {
  const [windowWidth, setWindowWidth] = react.useState(null);

  react.useEffect(() => {
    setWindowWidth(window.outerWidth)
  }, []);

  const [scrollX, setScrollX] = react.useState(0)

  const pc = usePcFunctions()

  function getNumber(string) {
    if(typeof string === 'number') return string
    
    if(!string || string === '') return 0
    
    let result = string.split('').filter( elem => {
        return !(Number(elem) !== Number(elem)) || elem === '.' || elem === '-'
    })
    return Number(result.join(''))
  }

  const imagesTextsTop = props.images.filter(elem => {
    return !!elem.textTop
  })
  const imagesTextsBottom = props.images.filter(elem => {
    return !!elem.textBottom
  })
  let div_Image_JustifyContent
  if(imagesTextsTop.length > 0 && imagesTextsBottom.length === 0) {
    div_Image_JustifyContent = 'flex-end'
  }else if(imagesTextsBottom.length > 0 && imagesTextsTop.length === 0) {
    div_Image_JustifyContent = 'flex-start'
  }else {
    div_Image_JustifyContent = 'center'
  }

  let arrowsAdjustment
  if(imagesTextsTop.length > 0 || imagesTextsBottom.length > 0) {
    arrowsAdjustment = 50
  }else {
    arrowsAdjustment = 20
  }

  // ----- Estilos dinamicos ----- //
  let section_list = {
    ...st.section_list,
    overflow: 'scroll',
  }
  if(windowWidth > 700) {
    section_list = {
      ...st.section_list,
      overflow: 'hidden',
    }
  }

  const div_Image = {
    ...st.div_Image,
    height: `${getNumber(props.height)*1.111}px`,
    width: `${getNumber(props.width)*1.111}px`,
    ...props.imageStyle,
  }
  const div_Row = {
    ...st.div_Row,
    transform: `translateX(${scrollX}px)`,
    width: `${getNumber(props.width)*props.images.length*1.111}px`,
  }
  const arrows = {
    ...st.arrows,
    height: `${getNumber(props.height)*1.111 + arrowsAdjustment}px`,
  }
  const div_item = {
    ...st.div_item,
    maxWidth: `${getNumber(props.width)*1.111}px`,
    background: `${props.itemBackground}`,
    justifyContent: div_Image_JustifyContent,
    ...props.itemStyle,
  }
 // -----         ----- // 

  return (
    <section style={{...section_list, ...props.style}} 
    onMouseOver={pc.handleArrowsIn} onMouseOut={pc.handleArrowsOut}>

      <div onClick={pc.handleLeftArrow(scrollX, setScrollX)}
      style={{...arrows, left: '5px'}}>{'<'}</div>

      <div onClick={pc.handleRightArrow(scrollX, setScrollX, props, getNumber)}
      style={{...arrows, right: '5px'}}>{'>'}</div>

      <div style={div_Row} onTouchStart={pc.handleTransition}>
        {props.images.map((elem, index) => (
          <a style={st.link} href={elem.link || '#'} key={index}>

            <div style={div_item} onMouseOver={pc.handleTransformIn} 
            onMouseOut={pc.handleTransformOut}>
              <span style={st.span} >{elem.textTop}</span>
              <div style={div_Image}>
                <img alt={elem.alt} src={elem.image} style={st.img} />
              </div>
              <span style={st.span} >{elem.textBottom}</span>
            </div>
            
          </a>
        ))}
      </div>
    </section>
  )
}

export default react.memo(Shscroll)