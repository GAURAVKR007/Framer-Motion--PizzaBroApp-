import React from 'react'

function Order({data}) {
    
    const lists = () => {
      return data.Toppings.map(item => {
            return (
                <li style={{listStyle: "none", textAlign: "center",fontSize: "1.9rem"}}>{item}</li>
            )
        })
    }

  return (
  <>
    <div style={{color: "white",textAlign: "center",lineHeight: "1.7",display: 'flex',flexDirection: "column", height: "75vh", justifyContent: "center", alignItems: "center"}}>
        <div>
            <h2 style={{fontSize: "3rem"}}>Thank You for Your order :)</h2>
            <hr style={{marginBottom: "10px"}}/>
            <h4 style={{fontSize: "2rem"}}>You ordered a {data.base} Pizza with :</h4>
            <div style={{textAlign: "start",}}>
                {lists()}
            </div>
        </div>
    </div>
  </>
  )
}

export default Order