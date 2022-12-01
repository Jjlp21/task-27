import React from 'react'

function Dashboard(props) {

    console.log(props.value)
    return <>
                <div className='margin'>
                    <div id="content-wrapper" class="d-flex flex-column">

                            {/* <!-- Main Content --> */}
                            <div id="content">

                                {/* <!-- Begin Page Content --> */}
                                <div class="container-fluid">

                                    {/* <!-- Page Heading --> */}
                                    <div class="d-sm-flex align-items-center justify-content-between mb-4">
                                        <h1 class="h3 mb-0 text-gray-800">Dashboard</h1>
                                        
                                    </div>

                                    {/* <!-- Content Row --> */}
                                    <div class="row">

                                        
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            </>
}

export default Dashboard
