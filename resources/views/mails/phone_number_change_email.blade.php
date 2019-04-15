@component('mail::message')
# Alteração de número de telefone

Uma solicitação para mudança de número de telefone foi realizada. 
Para prosseguir com a validação e a mudança, clique no link abaixo:

@component('mail::button', ['url' => ''])
Validar telefone
@endcomponent

Obrigado,<br>
{{ config('app.name') }}
@endcomponent
