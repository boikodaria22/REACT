//lesson 1
import PropTypes from 'prop-types'
export default function Section({title, children}){
  return(
    <div>
     {title && <h2>{title}</h2> }{/* если в props передан title, то заголовок h2 отрендерится,в противном слкчае даже не появится в dom*/}
     {children}{/*отрендкрятся наши children в нашем случае PaintingList */}
    </div>
  )
}

Section.propTypes = {
  title:PropTypes.string,
}//проверка типа переданого props title на тип строка через библиотеку prop-types