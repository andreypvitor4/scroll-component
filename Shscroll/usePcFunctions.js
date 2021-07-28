export default function usePcFunctions() {
  const pcFunctions = {
    handleLeftArrow: (scrollX, setScrollX) => {
      return (() => {
        let x = scrollX + Math.round(window.innerWidth / 2)
        if(x > 0) {
            x = 0
        }
        setScrollX(x)
      })
    },
  
    handleRightArrow: (scrollX, setScrollX, props, getNumber) => {
      return ( () => {
        let x = scrollX - Math.round(window.innerWidth / 2)
        let screen = window.innerWidth - props.width*props.images.length*1.111
        let margins; let paddings
        if(props.style) {
          margins = 2*getNumber(props.style.margin) + 
          getNumber(props.style.marginLeft) + getNumber(props.style.marginRight)
          paddings = 2*getNumber(props.style.padding) + 
          getNumber(props.style.paddingLeft) + getNumber(props.style.paddingRight)
        }else {
          margins = 0
          paddings = 0
        }
        if(x < screen - margins - paddings) {
            x = screen - margins - paddings
        }
        setScrollX(x)
      })
    },
  
    handleTransformIn: e => {
      e.currentTarget.style.transform = 'scale(1)'
    },
    handleTransformOut: e => {
      e.currentTarget.style.transform = 'scale(0.9)'
    },
    handleArrowsIn: e => {
      e.currentTarget.childNodes[0].style.opacity = '100'
      e.currentTarget.childNodes[1].style.opacity = '100'
    
      e.currentTarget.childNodes[2].style.transition = 'all ease 0.5s'
    },
    handleArrowsOut: e => {
      e.currentTarget.childNodes[0].style.opacity = '0'
      e.currentTarget.childNodes[1].style.opacity = '0'
    
      e.currentTarget.childNodes[2].style.transition = '0s'
    },
    handleTransition: e => {
      e.currentTarget.style.transition = '0s'
      e.currentTarget.parentNode.childNodes[0].style.visibility = 'hidden'
      e.currentTarget.parentNode.childNodes[1].style.visibility = 'hidden'
    },
  }

  return pcFunctions

}
