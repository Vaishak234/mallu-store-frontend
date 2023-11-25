import React from 'react';

import './footer.css';

function Footer() {
  return (
    <footer class="footer">
  <div class="footer__addr">
   
  
  <ul class="footer__nav">
    <li class="nav__item">
      <h2 class="nav__title">SHOP</h2>

      <ul class="nav__ul" >
        <li>
          <a href="#">Women</a>
        </li>

        <li>
          <a href="#">Men</a>
        </li>
            
        <li>
          <a href="#">Hugo Boss Home</a>
        </li>
      </ul>
    </li>
    
    <li class="nav__item ">
      <h2 class="nav__title">INFO</h2>
      
      <ul class="nav__ul">
        <li>
          <a href="#">Career at Hugo Boss</a>
        </li>
        
        <li>
          <a href="#">About Hugo Boss Group</a>
        </li>

        <li>
          <a href="#">Press</a>
        </li>
        </ul>
      </li>
        <li class="nav__item">
      <h2 class="nav__title">CORPORATE</h2>
          <ul class="nav__ul">
        <li>
          <a href="#">Corporate Governance</a>
        </li>
        
        <li>
          <a href="#">Investor Relations</a>
        </li>
        
        <li>
          <a href="#">Sustainability</a>
        </li>
      </ul>
    </li>
    
    <li class="nav__item">
      <h2 class="nav__title">HELP</h2>
      
      <ul class="nav__ul " >
        <li>
          <a href="#">Customer Service</a>
        </li>
        
        <li>
          <a href="#">Store Locator</a>
        </li>
        
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </li>
  </ul>
  
  </div>
  
  <div class="legal" >
    <p style={{textAlign:"center"}}>2020 Lokode. All rights reserved.</p>
    
 
      <p>The content of this site is copyright-protected and is the property of H&M Hennes & Mauritz AB. Hugo Boss's business <br/>concept is to offer fashion and quality at the best price. H&M has
</p> 
    <p>Hugo Boss</p>
  </div>
    </footer>
    
  );
}

export default Footer;