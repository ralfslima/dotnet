<template>
    <div class="home">
        <form>
            <input type="text" v-model="obj.nome"  placeholder="Nome" class="form-control" />
            <input type="text" v-model="obj.email" placeholder="E-mail" class="form-control" />
            <input type="button" value="Cadastrar" v-on:click="cadastrar()" v-if="clienteSelecionado == false" class="btn btn-primary" />
            <input type="button" value="Alterar"   v-on:click="alterar()"   v-if="clienteSelecionado == true"  class="btn btn-warning" />
            <input type="button" value="Remover"   v-on:click="remover()"   v-if="clienteSelecionado == true"  class="btn btn-danger" />
            <input type="button" value="Cancelar"  v-on:click="cancelar()"  v-if="clienteSelecionado == true"  class="btn btn-dark" />
        </form>

        <table class="table table-striped" v-if="clienteSelecionado == false">
            <thead>
                <tr>
                    <th>Linha</th>
                    <th>Nome</th>
                    <th>E-mail</th>
                    <th>Selecionar</th>
                </tr>
            </thead>

            <tbody>
                <tr v-for="(c, index) in clientes" v-bind:key="c.id">
                    <td>{{index+1}}</td>
                    <td>{{c.nome}}</td>
                    <td>{{c.email}}</td>
                    <td>
                        <button class="btn btn-success" v-on:click="selecionar(index)">
                            Selecionar
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        name: 'Home',
        data() {
            return {
                clientes: {},
                obj: {},
                clienteSelecionado: false
            }
        },
        beforeMount() {
            this.listar();
        },
        methods: {
            async listar() {
                const requisicao = await fetch('https://localhost:7298/api/Clientes');
                const retorno = await requisicao.json();
                this.clientes = retorno
            },
            async cadastrar() {
                const requisicao = new Request("https://localhost:7298/api/Clientes",
                    {
                        method: 'POST',
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(this.obj)
                    }
                );
                const executarRequisicao = await fetch(requisicao);
                const retorno = await executarRequisicao.json();
                this.clientes.push(retorno);
            },
            selecionar(indice) {
                this.clienteSelecionado = true;
                this.obj = this.clientes[indice];
            },
            cancelar() {
                this.clienteSelecionado = false;
                this.obj = [];
            },
            async alterar() {
                const requiscao = new Request(
                    "https://localhost:7298/api/Clientes/" + this.obj.id,
                    {
                        method: 'PUT',
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(this.obj)
                    }
                );
                await fetch(requiscao);

                this.listar();

                this.cancelar();
            },
            async remover() {
                const requisicao = new Request(
                    "https://localhost:7298/api/Clientes/" + this.obj.id,
                    {
                        method: 'DELETE',
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        }
                    }
                );
                await fetch(requisicao);

                this.listar();

                this.cancelar();
            }
        }
        
    };
</script>

<style scoped>
</style>