class Negociacao {

    // construtor
    constructor (_data, _quantidade, _valor) {

        this._data = new Date(_data.getTime()), 
        Object.assign(this, { _quantidade, _valor })
        Object.freeze(this)

    }

    // getters e setters
    get data() {
        return new Date(this._data.getTime())
    }

    setData(data) {
        return this._data = data
    }

    get quantidade() {
        return this._quantidade
    }

    setQuantidade(qtde) {
        return this._quantidade = qtde
    }

    get valor() {
        return this._valor
    }

    setValor(valor) {
        return this._valor = valor
    }

    // metodos auxiliares
    get volume() {
        return this._quantidade * this._valor
    }

}