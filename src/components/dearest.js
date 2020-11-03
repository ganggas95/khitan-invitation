import styless from './dearest.module.css'

const Dearest = ({ dearest }) => {
    return (
        <>
            <h2 className={styless.toDearest}>Kepada Yang Terhormat</h2>
            <h2 className={styless.toDearestName}>{dearest}</h2>
        </>
    )
}

export default Dearest;
