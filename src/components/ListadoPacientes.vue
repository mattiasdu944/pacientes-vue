<template>
    <div class="text-white">

        <h2 class="text-3xl font-bold text-center">Listado de pacientes</h2>
        <p class="text-xl font-semibold text-center">Administra tus citas y pacientes</p>

        <div>
            <card-paciente/>
        </div>

    </div>
</template>

<script>
import CardPaciente from './CardPaciente'
export default {
  components: { CardPaciente },

}
</script>

<style>

</style>