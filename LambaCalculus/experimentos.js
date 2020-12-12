// Lambda calculus
Number.prototype.log = function(){console.log(+this)}
Function.prototype.log = function(){console.log(this.toString())}

//Função identidade: função a qual recebe parâmetro e o resultado é o próprio parâmetro
const I = a => a 

I(3).log()
I(I).log()

const self = f => f(f)
self(I).log()

//Retornando apenas o primeiro parâmetro
const primeiro = a => _ => a
primeiro(7)(1).log()

//Retornando apenas o último parâmetro
const ultimo = _ => b => b
ultimo(4)(10).log()

//Invertendo os parâmetros (flip)
const flip = f => a => b => f(b)(a)

flip(ultimo)(7)(11).log() //Em vez do último, retorna o primeiro parâmetro
flip(primeiro)(6)(12).log() //Em vez do primeiro, retorna o último parâmetro

//Utilizando composição de funções para obter o último parâmetro (função que é composição da função flip() com função primeiro())
const ultimo2 = a => b => flip(primeiro)(a)(b)

ultimo2(13)(20).log()

//Função booleana TRUE e FALSE

/*No operador ternário, o resultado verdadeiro é equivalente à execução da função primeiro(), 
enquanto que o resultado falso representa a execução da função ultimo()*/

//TRUE ? <primeiro> : ultimo
//FALSE ? primeiro : <ultimo>

const t = primeiro
const f = ultimo

t.toString = () => 'Verdadeiro'
f.toString = () => 'Falso'

t.log()
f.log()

//Função NOT
const not = a => a(f)(t)

not(t).log()
not(f).log()

//Função AND
//Tabela verdade do AND
/*a  | b | r
  T  | F | F
  F  | T | F
  T  | T | T
  F  | F | F*/

const and = a => b => a(b)(f)
and(t)(t).log()
and(t)(f).log()
and(f)(t).log()
and(f)(f).log()

//Função OR
//Tabela verdade do OR
/*a  | b | r
  T  | F | T
  F  | T | T
  T  | T | T
  F  | F | F*/

const or = a => b => a(t)(b)
or(f)(t).log()
or(t)(f).log()
or(t)(t).log()
or(f)(f).log()

//Função igualdade booleana
/*a  | b | r
  T  | F | F
  F  | T | F
  T  | T | T
  F  | F | T*/

  const equal = a => b => a(b)(not(b))
  equal(t)(t).log()
  equal(t)(f).log()
  equal(f)(t).log()
  equal(f)(f).log()
  
//Função XOR (ou exclusivo)
/*a  | b | r
  T  | F | T
  F  | T | T
  T  | T | F
  F  | F | F*/

  const xor = a => b => not(a(b)(not(b)))
  xor(t)(t).log()
  xor(t)(f).log()
  xor(f)(t).log()
  xor(f)(f).log()
  