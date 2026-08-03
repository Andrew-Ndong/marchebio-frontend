import React from 'react'

const Login = () => {
    return (
    <>
        <div className='min-h-screen flex items-center justify-center bg-base-200'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <h1 className='mt-4 text-3xl font-semibold tracking-tight text-balance text-gray-900'>Bienvenue sur MarchéBio</h1>
                    <fieldset className="fieldset">
                        <label className="label">Email</label>
                        <input type="email" className="input" placeholder="jhonedoe@example.com" />
                        <label className="label">Password</label>
                        <input type="password" className="input" placeholder="Password" />
                        <div><a className="link link-hover">Mot de passe oublié?</a></div>
                        <button className="btn btn-neutral mt-4">Connexion</button>
                    </fieldset>
                </div>
            </div>
        </div>
    </>
    )
}

export default Login