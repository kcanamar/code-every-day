
let catPharses = {
  1:"...human...why you taking pictures of me?...",
  2:"...the catnip made me do it...",
  3:"...why does the red dot always get away..."
}

for (let i = 0; i < 20; i++) {
  let random = Math.floor(Math.random() * (3 - 1) + 1)
  if ( i % 2 === 0) {
    console.log(`even ${i}`, catPharses[random])
  } else {
    console.log(` ${i} Love me, pet me! HSSSSSS!`)
  }
}