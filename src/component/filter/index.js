import './inde.css'


const filterInfomation = [
    [
        {
            heading: 'Sort By',
            op1: ['Select'],
        },
        {
            heading: 'Grouping',
            op1: ['Monthly'],
        },
        {
            heading: 'Amount',
            op1: [45],
        },
    ],
    [
        {
            heading: 'Date',
            op1: ['Select'],
        },
        {
            heading: 'Status',
            op1: ['Select'],
        },
        {
            heading: 'Transaction Type',
            op1: ['Select'],
        },
    ],
    [
        {
            heading: 'Tag',
            op1: ['Select'],
        },
        {
            heading: 'Accounts & Cards',
            op1: ['Select'],
        },
        {
            heading: 'More',
            op1: ['Select'],
        },
    ],

]

const Filter = ({ handleClose }) => {


    return (
        <div class="border fixed inset-0 z-50 flex items-center justify-center w-[100vw]">
            <div onMouseLeave={() => {
                handleClose(false)
                // console.log("DF")
            }} class="absolute top-[18.5rem] left-[19.5rem] flex flex-col gap-4 bg-white p-5 pt-4 rounded-lg shadow-lg border w-[31vw] filter-container">
                <h1 className='text-[#101828] font-semibold text-[20px]'>Filters</h1>
                <div className='flex flex-col gap-4'>
                    {
                        filterInfomation.map(element => {
                            return (
                                <div className='flex gap-3 filter-list-container'>
                                    {
                                        element.map(data => {
                                            return (
                                                <div className='flex flex-col gap-2 filter'>
                                                    <span className='text-[#344054] font-medium text-[14px]'>{data.heading}</span>
                                                    <select className=' pl-3 pt-[8px] pb-[8px] border rounded-lg w-[9vw] outline-none light-shadow-normal-1 filter-select-width'>
                                                        {data.op1.map(item => {
                                                            return (
                                                                <option value={{ item }}>{item}</option>
                                                            )
                                                        })}
                                                    </select>
                                                </div>

                                            )
                                        })
                                    }
                                </div>
                            )
                        })
                    }
                </div>
                <div className='flex gap-2 justify-center'>
                    <button onClick={() => { handleClose(false) }} className='bg-white border text-[#314153] rounded-lg w-[20vw] pt-2 pb-2 font-semibold light-shadow-normal-1' type="button">Cancel</button>
                    <button onClick={() => { handleClose(false) }} className='bg-[#314153] border text-white rounded-lg w-[20vw] pt-2 pb-2 font-semibold light-shadow-normal-1' type="button">Apply</button>
                </div>
            </div>
        </div>
    )
}

export default Filter
