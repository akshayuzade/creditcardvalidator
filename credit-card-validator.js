// Validate a American Express credit card
// Following example validate a American Express credit card starting with 34 or 37, length 15 digits.
function cardnumber(ccnum)
{
  var cardno = /^(?:3[47][0-9]{13})$/;
  if(ccnum.value.match(cardno))
        {
      return true;
        }
      else
        {
        alert("Not a valid Amercican Express credit card number!");
        return false;
        }
}

// Validate a Visa credit card
// Following example validate a Visa card starting with 4, length 13 or 16 digits.
function cardnumber(ccnum)
{
  var cardno = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
  if(ccnum.value.match(cardno))
        {
      return true;
        }
      else
        {
        alert("Not a valid Visa credit card number!");
        return false;
        }
}

// Validate a MasterCard
// Following example validate a MasterCard starting with 51 through 55, length 16 digits.
function cardnumber(ccnum)
{
  var cardno = /^(?:5[1-5][0-9]{14})$/;
  if(ccnum.value.match(cardno))
        {
      return true;
        }
      else
        {
        alert("Not a valid Mastercard number!");
        return false;
        }
}


// Validate a Discover Card
// Following example validate a Discover Card starting with 6011, length 16 digits or starting with 5, length 15 digits.
function cardnumber(ccnum)
{
  var cardno = /^(?:3(?:0[0-5]|[68][0-9])[0-9]{11})$/;
  if(ccnum.value.match(cardno))
        {
      return true;
        }
      else
        {
        alert("Not a valid Dinners Club card number!");
        return false;
        }
}


// Validate a Diners Club Card
// Following example validate a Diners Club card starting with 300 through 305, 36, or 38, length 14 digits.

function cardnumber(ccnum)
{
  var cardno = /^(?:3(?:0[0-5]|[68][0-9])[0-9]{11})$/;
  if(ccnum.value.match(cardno))
        {
      return true;
        }
      else
        {
        alert("Not a valid Dinners Club card number!");
        return false;
        }
}

// Validate a JCB Card
// Following example validate a JCB card starting with 2131 or 1800, length 15 digits or starting with 35, length 16 digits.

function cardnumber(ccnum)
{
  var cardno = /^(?:(?:2131|1800|35\d{3})\d{11})$/;
  if(ccnum.value.match(cardno))
        {
      return true;
        }
      else
        {
        alert("Not a valid JCB card number!");
        return false;
        }
}

