/* switch(expression) {
    case n:
    code block
    break;
    case n:
    code block
    break;
    default:
    default code block
    } */

    /* switch(12) {
        case 1:console.log("hi");break;
        case 2:console.log("hi2");break;
        default:console.log("hello");break;
        } */
 const expr = 'Oraxyznges';
switch (expr) {
  case 'Oranges':
    console.log('Oranges are $0.59 a pound.');
    break;
  case 'Mangoes':
  case 'Papayas':
    console.log('Mangoes and papayas are $2.79 a pound.');
    // expected output: "Mangoes and papayas are $2.79 a pound."
    break;
  default:
    console.log(`Sorry, we are out of ${expr}.`);
}
 