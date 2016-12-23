/**
 *
 * @title 块状按钮组
 * @description 块状按钮组会充满父元素
 *
 */

class Demo3 extends Component {

    render () {
        return (
            <Row>
                <Col xs={4} xsOffset={4}>
                    <ButtonGroup vertical block>
                        <Button colors="primary">上</Button>
                        <Button colors="primary">中</Button>
                        <Button colors="primary">下</Button>
                    </ButtonGroup>
                </Col>
            </Row>

        )
    }
}
