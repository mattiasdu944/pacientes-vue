<template>
    <div class=" m-3 bg-white px-5 py-10 rounded-xl">
        
        <p class="font-bold mb-3 text-gray-700 uppercase">
            Nombre: 
            <span class="font-normal normal-case">
                {{ paciente.name }}
            </span>
        </p>
        <p class="font-bold mb-3 text-gray-700 uppercase">
            Apellidos: 
            <span class="font-normal normal-case">
                {{ paciente.lastname }}
            </span>
        </p>
        <p class="font-bold mb-3 text-gray-700 uppercase">
            Email: 
            <span class="font-normal normal-case">
                {{ paciente.email }}
            </span>
        </p>
        <p class="font-bold mb-3 text-gray-700 uppercase">
            Fecha Alta:
             <span class="font-normal normal-case">
                {{ paciente.date }}
            </span>
        </p>
        <p class="font-bold mb-3 text-gray-700 uppercase">
            Sintomas: 
            <span class="font-normal normal-case">
                {{ paciente.sintoma }}
            </span>
        </p>

        <div class="flex justify-around">
            <button type="button" class="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 cursor-pointer transition-colors text-white font-bold rounded-md mt-5">
                Editar
            </button>
            <button type="button" class="py-2 px-10 bg-red-600 hover:bg-red-700 cursor-pointer transition-colors text-white font-bold rounded-md mt-5">
                Eliminar
            </button>
        </div>
    </div>
</template>

<script>
export default {
    props:[ 'paciente' ]

}
</script>

<style>

</style>