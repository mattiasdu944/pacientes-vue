<template>
  
  <div class="text-center pt-10 text-white ">
    <h1 class="text-5xl font-bold">Seguimiento de pacientes</h1>
    <p class="text-2xl font-medium">Agenda y controla todas tus citas</p>
  </div>

  <div class="md:flex gap-3 container m-auto mt-5">

    <div class="md:w-7/12 px-3 md:p-0">
      <form-paciente :error="error" :paciente="paciente" @submit-form="handleSubmit"/>
    </div>
    
    <div class="md:w-5/12">
      <listado-pacientes :pacientes="pacientes"/>
    </div>


  </div>


</template>

<script>
import FormPaciente from './components/FormPaciente'
import ListadoPacientes from './components/ListadoPacientes'

export default {
  name: 'App',
  components: {
    ListadoPacientes,
    FormPaciente  
  },

  data(){
    return{
      pacientes : [],
      paciente : {
        name: '',
        lastname : ' ',
        email : '',
        date: '',
        sintoma: '',
      },

      error : false

    }
  },

  methods:{
    handleSubmit(){
      const { name, lastname, email, date, sintoma } = this.paciente

      if( name.trim() === '' || lastname.trim() === '' || email.trim() === '' || date.trim() === '' || sintoma.trim() === ''){
        this.error = true
        return;
      } 
      this.pacientes.push( {name, lastname, email, date, sintoma });
      this.error = false
      this.paciente = {
        name: '',
        lastname : ' ',
        email : '',
        date: '',
        sintoma: '',
      }
    }
  }
}
</script>

<style>

</style>
