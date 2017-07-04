const names = [
'Clutch - cerulean - lisaro leather',
'Clutch - indigo mountain - lisaro leather',
'Clutch - indigo mountain - maroon leather',
'Clutch - indigo shibori natural - lisaro leather',
'Clutch - indigo shibori natural - maroon leather',
'Clutch - indigo shibori white - lisaro leather',
'Clutch - indigo shibori white - maroon leather',
'Crossbody - cerulean - lisaro leather',
'Crossbody - indigo mountain - lisaro leather',
'Crossbody - indigo mountain',
'Crossbody - indigo prairie cloud - lisaro leather',
'Crossbody - indigo shibori white - lisaro leather',
'Crossbody - indigo shibori white - maroon leather',
'Crossbody - indigo shibori white',
'Duffle - indigo shibori',
'Medium tote - cerulean - maroon leather',
'Medium tote - indigo mountain - tan leather',
'Medium tote - indigo shibori natural - maroon leather',
'Medium tote - indigo shibori natural - tan leather',
'Small tote - cerulean - maroon leather',
'Small tote - indigo mountain - maroon leather ',
'Small tote - indigo mountain - tan leather',
'Small tote - indigo shibori white - black leather'
]

function makeSlugs(arr) {
  return arr
    .map( str => str.trim().toLowerCase().replace(/ - /g, '-').replace(/\s+/g, '-') )
}

console.log(makeSlugs(names))
