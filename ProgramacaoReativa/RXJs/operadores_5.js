const {of, Observable} = require('rxjs')


function endWith(final){
    return function(source){
        return Observable.create(subscriber => {
            source.subscribe({
                next(value) {
                    if(Array.isArray(value)){
                        subscriber.next(
                            value.filter(v => v.endsWith(final))
                        )
                    }
                    else if(value.endsWith(final)){
                        subscriber.next(value)
                    }
                },
                error(e){
                    subscriber.error(e)
                }
            })
        })
    }
}

of(['Victor Mello', 'Vanderson Guidi', 'João sem Braço'])
    .pipe(endWith('o'))
    .subscribe(console.log)