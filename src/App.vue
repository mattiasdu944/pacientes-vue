<template>
  
  <div class="text-center pt-10 text-white ">
    <h1 class="text-5xl font-bold">Seguimiento de pacientes</h1>
    <p class="text-2xl font-medium">Agenda y controla todas tus citas</p>
  </div>

  <div class="md:flex gap-3 container m-auto mt-5">

    <div class="md:w-7/12">
      <form-paciente/>
    </div>
    
    <div class="md:w-5/12">
      <listado-pacientes/>
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
  }
}
</script>

<style>

</style>
