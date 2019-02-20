import React from 'react'
import styled from 'styled-components'
import { Document, Page } from 'react-pdf';

import { getVideo, getPDF } from '../../services/api'

export default ({ resource }) => {
  return <Container>
    {
      resource.type === 'video'
        ? <Video video={resource} />
        : <PDF pdf={resource} />
    }
  </Container>
}

const Container = styled.div `
  width: 700px;
  height: 394px;
`

const Video = styled.video.attrs({
  src: props => getVideo(props.video.id),
  controls: true,
  autoPlay: true,
})`
  width: 700px;
  height: 394px;
`

class PDF extends React.Component {
  state = {
    numPages: null,
    pageNumber: 1,
  }

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  }

  nextPage = () => {
    this.setState(state => ({
      pageNumber: state.pageNumber === state.numPages ? state.pageNumber : state.pageNumber + 1,
    }))
  }

  prevPage = () => {
    this.setState(state => ({
      pageNumber: state.pageNumber === 1 ? 1 : state.pageNumber - 1,
    }))
  }

  render() {
    const { pageNumber, numPages } = this.state
    //console.log(this.props.pdf)

    return (
      <PDFContainer>
        {this.props.pdf.id && <>
          <DocumentContainer>
            <Document
              file={getPDF(this.props.pdf.id)}
              onLoadSuccess={this.onDocumentLoadSuccess}
            >
              <Page pageNumber={pageNumber} />
            </Document>
          </DocumentContainer>
          <PDFControls>
            Página {pageNumber} de {numPages},
           
          </PDFControls>
        </>}
      </PDFContainer>
    );
  }
}

const PDFContainer = styled.div`
  width: 700px;
  height: 394px;
  position: relative;
`

const DocumentContainer = styled.div`
  width: 700px;
  height: 394px;
  overflow-y: scroll;
`

const PDFControls = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;
`
