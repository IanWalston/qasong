import React from 'react'
import { TextField } from "@material-ui/core"

function VideoSearch({onSubmit, handleSearchTermInput}) {
    return (
        <form onSubmit={onSubmit}>
            <TextField id="outlined-basic" label="Search" variant="outlined" onChange={handleSearchTermInput} />
        </form>
    )
}

export default VideoSearch