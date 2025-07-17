import * as React from 'react'
import 'katex/dist/katex.min.css'
import Latex from 'react-latex-next'

export default function Math({ input }: { input: string }) {
	return <Latex>{input}</Latex>
}
