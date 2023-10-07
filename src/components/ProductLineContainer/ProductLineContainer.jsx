import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

export const ProductLineContainer = ( { title } ) => {

  const navigate = useNavigate();

  // To store the full title of the product line
  const [ lineTitle, setLineTitle ] = useState('');

  const convertToFullTitle = () => {
    switch (title) {
      case 'algodon':
        setLineTitle('Línea algodón');
        return lineTitle;
      case 'arcoiris':
        setLineTitle('Línea arcoiris');
        return lineTitle;
      case 'basica':
        setLineTitle('Línea básica');
        return lineTitle;
      case 'bebe':
        setLineTitle('Línea bebé');
        return lineTitle;
      case 'lana':
        setLineTitle('Línea lana');
        return lineTitle;
      case 'super':
        setLineTitle('Línea súper');
        return lineTitle;
      default:
        navigate(`/notfound`);
    }
  }

  useEffect(() => {
    convertToFullTitle();
  }, [])

  return (
    <>
      <div className="container">
        <h1>{lineTitle}</h1>
      </div>
    </>
  )
}
