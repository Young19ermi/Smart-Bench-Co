import React from 'react'

function payment({fname,lname,amount,tx_ref,public_key}){
  return (
    <div>
      <form method="POST" action="https://api.chapa.co/v1/hosted/pay" >
      <input type="hidden" name="public_key" value= {public_key} />
      <input type="hidden" name="tx_ref" value={tx_ref} />
      <input type="hidden" name="amount" value={amount} />
      <input type="hidden" name="currency" value="ETB" />
      <input type="hidden" name="email" value="ermiasendale19@gmail.com" />
      <input type="hidden" name="first_name" value={fname} />
      <input type="hidden" name="last_name" value={lname} />
      <input type="hidden" name="title" value="Wifi Payment Page" />
      <input type="hidden" name="description" value="Your Comfort our Priority" />
      <input type="hidden" name="logo" value="https://chapa.link/asset/images/chapa_swirl.svg" />
      <input type="hidden" name="callback_url" value="https://example.com/callbackurl" />
      <input type="hidden" name="return_url" value="https://example.com/returnurl" />
      <input type="hidden" name="meta[title]" value="test" />
      <button className="pay-button" type="submit">Pay Now</button>
      </form>
    </div>
  )
}

export default payment;