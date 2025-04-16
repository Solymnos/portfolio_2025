import CareerItem from './CareerItem';

let Career = () =>
{
    return (
        <div className='flex flex-row h-screen w-full'>
            <CareerItem type='diploma' place='Jouè-les-Tours' date='2015' title='Bachelor' data='Engineering'/>
            <CareerItem type='diploma' place='Blois' date='2015-2017' title='Technological University Degree' data='Engineering' />
            <CareerItem type='job' place='Tours' date='2017' title='Intership' data='BMS37'/>
            <CareerItem type='diploma' place='Nantes' date='2017-2022' title={`Master\'s degree`} data='Information Technologies' />
            <CareerItem type='job' place='Nantes' date='2018-2019' title='Internship' data='RESO'/>
            <CareerItem type='job' place='Bordeaux' date='2021-2023' title='Full Time' data='IIDRE'/>
            <CareerItem type='job' place='Bordeaux' date='2023-Present' title='Full Time' data='Thales'/>
        </div>
    )
}

export default Career;