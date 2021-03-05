document.getElementById('btNewIngredient').addEventListener('click', () => {
  const ingredient = document.getElementById('ingredient')
  const ingredients = document.querySelectorAll('.ingredients')

  const newIngredient = ingredients[ingredients.length - 1].cloneNode(true)

  if (newIngredient.children[0].value == '') return console.log('erro')

  newIngredient.children[0].value = ''
  ingredient.appendChild(newIngredient)

  console.log(newIngredient)
})

document.getElementById('btNewStep').addEventListener('click', () => {
  const stepContainer = document.getElementById('stepsContainer')
  const steps = document.querySelectorAll('.step')

  const newStep = steps[steps.length - 1].cloneNode(true)

  if (newStep.children[0].value == '') return false

  newStep.children[0].value = ''
  stepContainer.appendChild(newStep)
})
