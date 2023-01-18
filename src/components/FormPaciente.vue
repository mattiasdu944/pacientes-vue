<template>

    <div class="text-center text-white mb-5">
        <h2 class="text-3xl font-bold ">Formulario</h2>
        <p class="text-xl font-semibold ">Registra a tus pacientes</p>
    </div>

    <template v-if="error">
        <banner-error/>
    </template>


    <div class="bg-white rounded-xl shadow-lg px-5 py-8">
        <form @submit.stop.prevent="$emit('submit-form')">
            <div class="mb-5">
                <label for="">Nombre/s:</label>
                <input v-model="paciente.name" type="text" class="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md">
            </div>

            <div class="mb-5">
                <label for="">Apellidos:</label>
                <input v-model="paciente.lastname" type="text" class="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md">
            </div>

            <div class="mb-5">
                <label for="">Correo electronico</label>
                <input v-model="paciente.email" type="email" class="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md">
            </div>


            <div class="mb-5">
                <label for="">Fecha de la cita</label>
                <input v-model="paciente.date" type="date" class="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md">
            </div>

            <div class="mb-5">
                <label for="">Sintomas:</label>
                <textarea v-model="paciente.sintoma" class="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"></textarea>
            </div>

            <button type="submit" class="w-full bg-indigo-600 py-2 rounded-md text-white font-bold hover:bg-indigo-800 transition-all">
                Agrendar cita
            </button>
        </form>
    </div>

</template>

<script>
import BannerError from './BannerError'

export default {
  components: { BannerError },
    props:{
        paciente:{
            type:Object,
            required:true
        },
        error:{
            type: Boolean,
            required:true
        }
    },

    emits:{
        'submit-form': 'submit-form'
    },

}
</script>

<style>

</style>